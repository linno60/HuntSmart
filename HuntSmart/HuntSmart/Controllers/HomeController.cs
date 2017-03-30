using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HuntSmart.Models;

namespace HuntSmart.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        IProfile p;
        public HomeController(IProfile pr)
        {

            p = pr;

        }
        public ActionResult userProfile()
        {
            string email = Session["lemail"].ToString();
            User u = p.getuser(email);

            string u_fname = u.User_FirstName;
            string u_lname = u.User_LastName;
            string u_dob = u.User_DOB;
            string u_email = u.User_Email;
            string u_des = u.User_Description;
            string u_contact = u.User_ContactNo;
            string u_dp = u.User_Dp;

            Session["l_fname"] = u_fname;
            Session["l_lname"] = u_lname;
            Session["l_dob"] = u_dob;
            Session["l_email"] = u_email;
            Session["l_des"] = u_des;
            Session["l_contact"] = u_contact;
            Session["l_dp"] = u_dp;

            return View();
        }
       









        /// <summary>
        /// ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// </summary>
        /// <returns></returns>

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Index_l()
        {
            return View();
        }

        public ActionResult companylist_l()
        {
            return View();
        }

        public ActionResult companylist()
        {
            return View();
        }

        public ActionResult email()
        {
            return View();
        }

        public ActionResult example()
        {
            return View();
        }

        public ActionResult experience()
        {
            return View();
        }

        public ActionResult newCompanies()
        {
            return View();
        }

        public ActionResult newCompanies_l()
        {
            return View();
        }

        public ActionResult password()
        {
            return View();
        }

        public ActionResult popularCompanies()
        {
            return View();
        }

        public ActionResult popularCompanies_l()
        {
            return View();
        }

        public ActionResult privacy()
        {
            return View();
        }

        public ActionResult profile_company()
        {
            return View();
        }

        public ActionResult profile_company_l()
        {
            return View();
        }

        
        public ActionResult topCompanies()
        {
            return View();
        }

        public ActionResult topCompanies_l()
        {
            return View();
        }

       

        public ActionResult userDashboard()
        {
            return View();
        }

        
    }
}