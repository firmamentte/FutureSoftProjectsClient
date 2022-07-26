using Microsoft.Extensions.Configuration;
using System.Net.Http.Headers;

namespace FutureSoftProjectsClient.BLL
{
    public class StaticClass
    {
        public static MediaTypeWithQualityHeaderValue MediaTypeWithQualityHeaderValue
        {
            get
            {
                return new MediaTypeWithQualityHeaderValue("application/json");
            }
        }

        public static string FutureSoftProjectsAPIBaseAddress { get; set; }

        public static void InitializeAppSettings(IConfiguration configuration)
        {
            FutureSoftProjectsAPIBaseAddress ??= configuration["AppSettings:Urls:FutureSoftProjectsAPIBaseAddress"];
        }
    }
}