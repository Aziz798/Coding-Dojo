using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Getters_Setters
{
    public class User
    {
        private string _userName; // private field to store the value of the property

        public string UserName // property definition
        {
            get
            {
                return _userName;
            }
            set
            {
                _userName = value;
            }
        }

        public User(string name)
        {
            this.UserName = name;
        }
    }
}
