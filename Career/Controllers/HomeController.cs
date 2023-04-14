using Microsoft.AspNetCore.Mvc;
using Microsoft.Build.Framework;
using System.Drawing;
using System.IO;

namespace Career.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public class InputCv
        {
            //Genral Information

            public string NameUser { get; set; }

            public string Email { get; set; }

            public string Jop { get; set; }

            public string Phone { get; set; }

            public string Country { get; set; }

            public string Governorate { get; set; }

            public string Address { get; set; }

            public List<IFormFile> ImageUser { get; set; }

            public DateTime Birthday { get; set; }
            //Education

            public List<string> CollegeName { get; set; }

            public List<string> Department { get; set; }

            public List<string> Grade { get; set; }

            public List<DateTime> startDate { get; set; }

            public List<DateTime> EndDate { get; set; }
            public List<IFormFile> Certificate { get; set; }
            //Language

            public List<string> Language { get; set; }

            public List<int> RLangage { get; set; }
            //summary

            public string summary { get; set; }
            //Skill

            public List<string> SkillName { get; set; }
            //workExperia

            public List<string> NameProject { get; set; }

            public List<string> summaryProject { get; set; }
            //SocialMedia

            public List<string> SocialName { get; set; }

            public List<string> LinkSoial { get; set; }

            //----------------------------------------------
            public byte[]? imgaeUs { get; set; }
            public List<byte[]>? ImageC { get; set; }

        }
        public IActionResult CreateCv()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> CreateCv(InputCv input)
        {
            
            if(input.ImageUser!=null)
            {
                using (var memorystream=new MemoryStream())
                {
                    await input.ImageUser[0].CopyToAsync(memorystream);
                    input.imgaeUs= memorystream.ToArray();
                }
                if(input.Certificate!=null)
                {
                    foreach (var file in inputCv.Certificate)
                    {
                        using (var memorystream = new MemoryStream())
                        {
                            await file.CopyToAsync(memorystream);
                            input.ImageC.Add(memorystream.ToArray());
                        }
                    }
                }
                inputCv = input;
                return Redirect("CvUser");
            }
            else
            {
                return BadRequest();
            }
        }
        
        public IActionResult CvUser()
        {
            return View(inputCv);
        }
        //if Whene Add Many Templete to cv
       static InputCv inputCv { get; set; }

    }
}
