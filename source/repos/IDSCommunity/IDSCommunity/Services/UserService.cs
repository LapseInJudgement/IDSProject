using IDSCommunityProject.Models;
using IDSCommunityProject.Services.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;


namespace IDSCommunityProject.Services
{
    public class UserService : IUserService
    {
        private readonly IdscommunityPlatformContext _context;

        public UserService(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetUserAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(m => m.Id == id);
#pragma warning disable CS8603 // Possible null reference return.
            return user;
#pragma warning restore CS8603 // Possible null reference return.
        }

        public async Task<User> CreateUserAsync(User user)
        {
           
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }
        public async Task<bool> UserExistsAsync(int id)
        {
            // Check if a user exists by ID
            var user = await GetUserByIdAsync(id);
            return user != null; // returns true if user is found, false if not
        }

        public async Task<bool> UpdateUserAsync(int id, User user)
        {
            if (id != user.Id) return false;
            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return false;
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public Task<User> CreateUserAync(User user)
        {
            throw new NotImplementedException();
        }

    }
}

       

