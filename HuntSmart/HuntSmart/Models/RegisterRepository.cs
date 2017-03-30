using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;


namespace HuntSmart.Models
{
    public class RegisterRepository : IRegister
    {
        HuntSmartEntities1 db = new HuntSmartEntities1();
        public EmailVerificationCode ec = new EmailVerificationCode();
        public User usr = new User();

        public void RegisterAccount(User u)
        {
            string firstname =u.User_FirstName ;
            string lastname = u.User_LastName;
            string email = u.User_Email;
            string password = u.User_Password;
            string gender = u.User_Gender.ToString();
           
            string dob = u.User_DOB.ToString();

            string AccountCreationTime = DateTime.Now.ToString();
            Boolean EmailVerfStatus = false;
            Boolean EmailPrivacyStatus = false;
            Boolean ContactPrivacyStatus = false;
            Boolean NamePrivacyStatus = false;
            Boolean DOBPrivacyStatus = false;

            User user = new User();

            user.User_FirstName = firstname;
            user.User_LastName = lastname;
            user.User_Email = email;
            user.User_Password = password;
            user.User_Gender = gender;
            user.User_DOB = dob;
            user.User_EmailVerifStatus = EmailVerfStatus;
            user.User_EmailPrivacyStatus = EmailPrivacyStatus;
            user.User_ContactNoPrivacyStatus = ContactPrivacyStatus;
            user.User_NamePrivacyStatus = NamePrivacyStatus;
            user.User_DOBPrivacyStatus = DOBPrivacyStatus;
            user.User_AccountCreationDate = AccountCreationTime;
            db.Users.Add(user);
            db.SaveChanges();
            EmailVerificationCode(user);
        }
        public bool login(string email, string pass)
        {
            var q = db.Users.Where(x => x.User_Email == email && x.User_Password == pass && x.User_EmailVerifStatus==true).FirstOrDefault();
            if(q!=null)
            {
                return true;
            }
            else
                return false;
        }
        public EmailVerificationCode getEmailVerificationCode()
        {
            return ec;
        }
        public void SetEmailVerificationCode(EmailVerificationCode code)
        {
            ec = code;
        }
        public User getUser()
        {
            return usr;
        }
        public void setUser(User u)
        {
            usr = u;
        }

        public string EmailVerificationCode(User u)
        {
            
            string code=Guid.NewGuid().ToString();
            EmailVerificationCode evc = new EmailVerificationCode();
            evc.EmailVerificationCode_Value = code;
            evc.EmailVerificationCode_CreationTime= DateTime.Now;
            evc.EmailVerificationCode_UserId = u.User_Id;
            db.EmailVerificationCodes.Add(evc);
            db.SaveChanges();
            SetEmailVerificationCode(evc);
            setUser(u);


            try
            {
                MailMessage mailMessage = new MailMessage();
                mailMessage.To.Add(u.User_Email);
                mailMessage.From = new MailAddress("bsef13m025@pucit.edu.pk");
                mailMessage.Subject = "Hunt Smart- Email Verification";
                mailMessage.Body = "Dear"+" "+u.User_FirstName+" "+u.User_LastName+","+"\n\n"+"We are pleased to see you at HuntSmart.\n\n"+"Your Email verification code is: "+code+"\n\n\n"+"Regards\n"+"Mahreen Ahmad,HR Manager\nHuntSmart";
                SmtpClient smtpClient = new SmtpClient("smtp.your-isp.com");
                smtpClient.UseDefaultCredentials = true;
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtpClient.Host = "smtp.gmail.com";
                smtpClient.Port = 587;
                smtpClient.EnableSsl = true;
                smtpClient.Credentials = new NetworkCredential("bsef13m025@pucit.edu.pk", "murtaza024");
                smtpClient.Timeout = 20000;
                smtpClient.Send(mailMessage);
                return"E-mail sent!";
            }
            catch (Exception ex)
            {
                return "Could not send the e-mail - error: " + ex.Message  ;
            }
           
        }
        public bool CheckEmailCode(string emailcode, EmailVerificationCode ec, User ur)
        {
            EmailVerificationCode evcode = ec;
            User u = ur;
            if (emailcode==evcode.EmailVerificationCode_Value)
            {
               User u1=db.Users.Find(u.User_Id);
               u1.User_EmailVerifStatus = true;
               db.SaveChanges();
               return true;
            }
            else
             return false;
        }
      
        public User VerifyEmail(string Email)
        {
            return db.Users.FirstOrDefault(x => x.User_Email.Equals(Email));
        }
        public bool IsEmailUnique(string email)
        {
            bool EmailExist = false;
            var exist = db.Users.FirstOrDefault(x => x.User_Email == email);
            if (exist != null)
            {
                EmailExist = true;
            }
            if (EmailExist == false)
            {
                return true;
            }
            if (EmailExist == true)
            {
                return false;
            }
            return false;
        }
    }
}