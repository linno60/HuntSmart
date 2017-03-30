using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HuntSmart.Models
{
    public class ProfileRepository:IProfile
    {
        HuntSmartEntities1 db = new HuntSmartEntities1();
        public User getuser(string email)
        {
            User u = new User();
            u= db.Users.Where(x => x.User_Email == email).FirstOrDefault();
            return u;
        }
    }
}