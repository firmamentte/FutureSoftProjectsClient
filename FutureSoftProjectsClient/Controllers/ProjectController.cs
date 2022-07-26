using FutureSoftProjectsClient.BLL.BLLClasses;
using FutureSoftProjectsClient.Controllers.ControllerHelpers;
using FutureSoftProjectsClient.Models.Project;
using Microsoft.AspNetCore.Mvc;

namespace FutureSoftProjectsClient.Controllers
{
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public class ProjectController : Controller
    {
        private readonly ProjectBLL _projectBLL;
        private readonly ProjectHelper _projectHelper;

        public ProjectController(IHttpClientFactory httpClientFactory)
        {
            _projectBLL = new(httpClientFactory);
            _projectHelper = new();
        }

        [NonAction]
        private async Task<List<ProjectGridModel>> GetProjectGridModel(string? searchValue)
        {
            List<ProjectGridModel> _projectGridModels = _projectHelper.FillProjectGridModel(await _projectBLL.GetProjetcs(searchValue));

            if (!_projectGridModels.Any())
                ViewBag.GridViewMessage = "Search yielded no results...";

            return _projectGridModels;
        }

        public async Task<IActionResult> Index()
        {
            PartialView("ProjectGrid", await GetProjectGridModel(null));

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> GetProjects(string? searchValue)
        {
            return PartialView("ProjectGrid", await GetProjectGridModel(searchValue));
        }
    }
}