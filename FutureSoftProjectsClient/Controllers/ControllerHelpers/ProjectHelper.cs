using FutureSoftProjectsClient.BLL.DataContract;
using FutureSoftProjectsClient.Models.Project;

namespace FutureSoftProjectsClient.Controllers.ControllerHelpers
{
    public class ProjectHelper
    {
        public List<ProjectGridModel> FillProjectGridModel(List<ProjectResp> projetcResps)
        {
            projetcResps ??= new();

            List<ProjectGridModel> _model = new();

            foreach (var projetcResp in projetcResps)
            {
                _model.Add(new ProjectGridModel()
                {
                    Name = projetcResp.Name,
                    ImageLink = projetcResp.ImageLink,
                    Groups = FillGroupGridModel(projetcResp.Groups)
                });
            }

            return _model;
        }

        private List<GroupGridModel> FillGroupGridModel(List<GroupResp> groupResps)
        {
            groupResps ??= new();

            List<GroupGridModel> _model = new();

            foreach (var groupResp in groupResps)
            {
                _model.Add(new GroupGridModel()
                {
                    Name = groupResp.Name,
                });
            }

            return _model;
        }
    }
}
