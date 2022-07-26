using FutureSoftProjectsClient.Models.Shared;

namespace FutureSoftProjectsClient.Controllers.ControllerHelpers
{
    public class SharedHelper
    {
        public OkModel FillOkModel(string message, string messageSymbol)
        {
            return new OkModel() { OkMessage = message, MessageSymbol = messageSymbol };
        }
    }
}
