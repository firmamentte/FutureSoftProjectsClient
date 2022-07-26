using FutureSoftProjectsClient.BLL.DataContract;

namespace FutureSoftProjectsClient.BLL.BLLClasses
{
    public class ProjectBLL : SharedBLL
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public ProjectBLL(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<List<ProjectResp>> GetProjetcs(string? searchValue)
        {
            HttpClient _httpClient = CreateHttpClient(_httpClientFactory);

            string _parameters = "?searchValue=" + searchValue;

            using HttpResponseMessage _httpResponseMessage = await _httpClient.GetAsync($"api/GetProjects{_parameters}");

            if (!_httpResponseMessage.IsSuccessStatusCode)
                throw new Exception(ConstructClientError(await _httpResponseMessage.Content.ReadAsAsync<ApiErrorResp>()));

            return await _httpResponseMessage.Content.ReadAsAsync<List<ProjectResp>>();
        }
    }
}
