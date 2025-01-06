using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;
using IDSCommunityProject.Services.Interfaces;
using IDSCommunityProject.Services;

namespace IDSCommunityProject.Controllers
{
    [Route("api/user")] // Base route for this controller
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: api/user
        // Description: Fetches a list of all users.
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _userService.GetUserAsync();
            return Ok(users);
        }

        // GET: api/user/{id}
        // Description: Fetches the details of a specific user by ID.
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: api/user
        // Description: Creates a new user 
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser([FromBody] User user)
        {
            if (ModelState.IsValid)
            {
                 

                var createdUser = await _userService.CreateUserAync(user);
                return CreatedAtAction(nameof(GetUser), new { id = createdUser.Id }, createdUser);

            }
              return BadRequest(ModelState);  
               
            }
            

        // PUT: api/user/{id}
        // Description: Updates the data of an existing user by ID.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            if (ModelState.IsValid)
            {
                var isUpdated = await _userService.UpdateUserAsync(id, user);
                if (!isUpdated)
                {
                    return NotFound();
                }
                return NoContent();
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/user/{id}
        // Description: Deletes a user by ID.
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var isDeleted = await _userService.DeleteUserAsync(id);
            if (!isDeleted)
            {
                return NotFound();
            }

            
            return NoContent();
        }

        // Helper Method
        // Description: Checks if a user exists by ID.
        private async Task<bool> UserExists(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            return user != null;
        }

    }
}
