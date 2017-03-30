using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace HuntSmart.Models
{
    public interface IRegister
    {
       void RegisterAccount(User u);
       bool IsEmailUnique(string email);
       User VerifyEmail(string Email);
       string EmailVerificationCode(User Email);
       bool CheckEmailCode(string emailcode, EmailVerificationCode ec, User u);
       
        EmailVerificationCode getEmailVerificationCode();
       void SetEmailVerificationCode(EmailVerificationCode code);
       User getUser();
       void setUser(User u);
       bool login(string email,string pass);
    }
}
