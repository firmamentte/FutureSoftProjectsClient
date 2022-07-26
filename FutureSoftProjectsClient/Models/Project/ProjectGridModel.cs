namespace FutureSoftProjectsClient.Models.Project
{
    public class ProjectGridModel
    {
        public string Name { get; set; } = string.Empty;
        public string ImageLink { get; set; } = string.Empty;
        public List<GroupGridModel> Groups { get; set; } = new();
    }
}
