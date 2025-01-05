using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;

namespace IDSCommunityProject.Controllers
{
    [Route("api/rolePermission")]
    [ApiController]  // Added ApiController to ensure API behavior
    public class RolePermissionController : ControllerBase // Inherit from ControllerBase for API-specific functionality
    {
        private readonly IdscommunityPlatformContext _context;

        public RolePermissionController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // (1) Get all RolePermissions
        // Endpoint: GET api/rolePermission
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var rolePermissions = await _context.RolePermissions
                .Include(r => r.Permission)
                .Include(r => r.Role)
                .ToListAsync();
            return Ok(rolePermissions);
        }

        // (2) Get a specific RolePermission by ID
        // Endpoint: GET api/rolePermission/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rolePermission = await _context.RolePermissions
                .Include(r => r.Permission)
                .Include(r => r.Role)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (rolePermission == null)
            {
                return NotFound();
            }

            return Ok(rolePermission);
        }

        // (3) Create a new RolePermission
        // Endpoint: POST api/rolePermission
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,RoleId,PermissionId")] RolePermission rolePermission)
        {
            if (ModelState.IsValid)
            {
                _context.Add(rolePermission);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Details), new { id = rolePermission.Id }, rolePermission);
            }
            return BadRequest(ModelState);
        }

        // (4) Update an existing RolePermission
        // Endpoint: PUT api/rolePermission/{id}
        [HttpPut("{id:int}")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,RoleId,PermissionId")] RolePermission rolePermission)
        {
            if (id != rolePermission.Id)
            {
                return BadRequest("ID mismatch.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(rolePermission);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RolePermissionExists(rolePermission.Id))
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
            return BadRequest(ModelState);
        }

        // (5) Delete a RolePermission by ID
        // Endpoint: DELETE api/rolePermission/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rolePermission = await _context.RolePermissions
                .Include(r => r.Permission)
                .Include(r => r.Role)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (rolePermission == null)
            {
                return NotFound();
            }

            _context.RolePermissions.Remove(rolePermission);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RolePermissionExists(int id)
        {
            return _context.RolePermissions.Any(e => e.Id == id);
        }
    }
}
