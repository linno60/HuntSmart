using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HuntSmart.Models;

namespace HuntSmart.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        IRegister reg;
        public EmailVerificationCode ec = new EmailVerificationCode();
        public User usr = new User();

        public AccountController(IRegister r)
        {

            reg = r;

        }

        public ActionResult register()
        {
            return View();
        }
        public ActionResult loginf()
        {
            return View();
        }
        public ActionResult VerifyEmail()
        {
            return View();
        }
        
        [HttpPost]
        public ActionResult login(string loginemail, string loginpass)
        {
            bool loginStatus = false;
            string email = loginemail;
            string pass = loginpass;
            loginStatus =reg.login(email, pass);
            if (loginStatus == true)
            {
                Session["lemail"] = email;
                Session["lpass"] = pass;

                return RedirectToAction("userProfile", "Home");
            }
            else

                return RedirectToAction("loginf");
        }

        


        [HttpPost]
        public ActionResult VerifyEmail(string verifyemail)
        {
            bool emailVerStatus = false;
            string emailcode = verifyemail;
            ec = TempData["emailVerf"]as EmailVerificationCode;
            usr = TempData["user"] as User;

            emailVerStatus = reg.CheckEmailCode(emailcode, ec, usr);
            if(emailVerStatus==true)
            {
               
                return RedirectToAction("Home","index");
            }
            else
            {
                return RedirectToAction("VerifyEmail");
            }

            
            
        }

        [HttpPost]
        public ActionResult register(User u)
        {
            var errors = ModelState.Values.SelectMany(v => v.Errors);
            if (ModelState.IsValid)
            {
                reg.RegisterAccount(u);
                ec=reg.getEmailVerificationCode();
                usr=reg.getUser();
                TempData["user"] = usr;
                TempData["emailVerf"] = ec;
                
                return RedirectToAction("VerifyEmail");
            }
            else
                return View(u);
        }
        [HttpPost]
        public JsonResult IsUserExists(string User_Email)
        {

             User u = reg.VerifyEmail(User_Email);

              return Json(u == null);
            
        }

        [AllowAnonymous]
        public ActionResult IsEmailUnique(string input)
        {

            // return sign.CheckUserName(input);
            string e = input;
            string response = null;
            bool status = reg.IsEmailUnique(e);
            if (status == true)
            { response = "Email Available"; }
           
            else if (status == false)
            {
                response = "Not Available";
            }
            else { response = "Nothing Returned"; }
            Response.Write(response);

            return null;
        }
    }
}