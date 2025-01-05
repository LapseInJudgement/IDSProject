using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IDSCommunityProject.Controllers
{
    // API Controller for handling Notification-related requests
    [Route("api/Notification")]
    [ApiController]
    public class NotificationApiController : ControllerBase
    {
        private readonly IdscommunityPlatformContext _context;

        public NotificationApiController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // GET: api/NotificationApi
        // Retrieve all notifications along with associated reactions and users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notification>>> GetNotifications()
        {
            var notifications = await _context.Notifications
                .Include(n => n.Reaction)
                .Include(n => n.User)
                .ToListAsync();

            return Ok(notifications);
        }

        // GET: api/NotificationApi/5
        // Retrieve a specific notification by its ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Notification>> GetNotification(int id)
        {
            var notification = await _context.Notifications
                .Include(n => n.Reaction)
                .Include(n => n.User)
                .FirstOrDefaultAsync(n => n.Id == id);

            if (notification == null)
            {
                return NotFound();
            }

            return Ok(notification);
        }

        // PUT: api/NotificationApi/5
        // Update an existing notification
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNotification(int id, Notification notification)
        {
            if (id != notification.Id)
            {
                return BadRequest();
            }

            _context.Entry(notification).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotificationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/NotificationApi
        // Create a new notification
        [HttpPost]
        public async Task<ActionResult<Notification>> PostNotification(Notification notification)
        {
            _context.Notifications.Add(notification);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNotification", new { id = notification.Id }, notification);
        }

        // DELETE: api/NotificationApi/5
        // Delete a notification by its ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNotification(int id)
        {
            var notification = await _context.Notifications.FindAsync(id);
            if (notification == null)
            {
                return NotFound();
            }

            _context.Notifications.Remove(notification);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NotificationExists(int id)
        {
            return _context.Notifications.Any(e => e.Id == id);
        }
    }
}
