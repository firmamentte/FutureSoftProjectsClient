using FutureSoftProjectsClient.Controllers.ControllerHelpers;
using Microsoft.AspNetCore.Mvc;

namespace FutureSoftProjectsClient.Controllers
{
    public class SharedController : Controller
    {
        private readonly SharedHelper _sharedHelper;

        public SharedController()
        {
            _sharedHelper = new();
        }

        [HttpGet]
        public ActionResult Ok(string okMessage, string messageSymbol)
        {
            return PartialView("_Ok", _sharedHelper.FillOkModel(okMessage, messageSymbol));
        }
    }
}
