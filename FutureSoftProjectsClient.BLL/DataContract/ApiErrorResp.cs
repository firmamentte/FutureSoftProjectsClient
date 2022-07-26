
namespace FutureSoftProjectsClient.BLL.DataContract
{
    public class ApiErrorResp
    {
        public string Message { get; set; } = string.Empty;
        public List<string> Errors { get; set; } = new();
    }
}
