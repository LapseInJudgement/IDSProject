using System.Collections.Generic;
using System.Threading.Tasks;
using IDSCommunityProject.Models;
using IDSCommunityProject.Services;




namespace IDSCommunityProject.Services.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetUserAsync();
        Task<User> GetUserByIdAsync(int id);
        Task<User> CreateUserAync(User user);
        Task<bool> UpdateUserAsync(int id, User user);
        Task<bool> DeleteUserAsync(int id);
    }
}
