using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;
using System.Linq;
using System.Threading.Tasks;

namespace IDSCommunityProject.Controllers.Api
{
    [Route("api/Permission")]
    [ApiController]
    public class PermissionApiController : ControllerBase
    {
        private readonly IdscommunityPlatformContext _context;

        public PermissionApiController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // GET: api/PermissionApi
        [HttpGet]
        public async Task<IActionResult> GetPermissions()
        {
            var permissions = await _context.Permissions.ToListAsync();
            return Ok(permissions);
        }

        // GET: api/PermissionApi/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPermission(int id)
        {
            var permission = await _context.Permissions
                .FirstOrDefaultAsync(m => m.PermissionId == id);

            if (permission == null)
            {
                return NotFound();
            }

            return Ok(permission);
        }

        // POST: api/PermissionApi
        [HttpPost]
        public async Task<IActionResult> PostPermission([FromBody] Permission permission)
        {
            if (ModelState.IsValid)
            {
                _context.Permissions.Add(permission);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetPermission), new { id = permission.PermissionId }, permission);
            }
            return BadRequest();
        }

        // PUT: api/PermissionApi/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPermission(int id, [FromBody] Permission permission)
        {
            if (id != permission.PermissionId)
            {
                return BadRequest();
            }

            _context.Entry(permission).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PermissionExists(id))
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

        // DELETE: api/PermissionApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePermission(int id)
        {
            var permission = await _context.Permissions.FindAsync(id);
            if (permission == null)
            {
                return NotFound();
            }

            _context.Permissions.Remove(permission);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PermissionExists(int id)
        {
            return _context.Permissions.Any(e => e.PermissionId == id);
        }
    }
}
