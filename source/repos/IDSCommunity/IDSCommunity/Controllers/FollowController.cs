using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;

namespace IDSCommunityProject.Controllers
{
    [Route("api/follow")]  // Define API route
    [ApiController]  // Added ApiController for API-specific behavior
    public class FollowController : ControllerBase // Use ControllerBase for API-specific behavior
    {
        private readonly IdscommunityPlatformContext _context;

        public FollowController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // (1) Get all Follows
        // Endpoint: GET api/follow
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var follows = await _context.Follows.ToListAsync();
            return Ok(follows);
        }

        // (2) Get a specific Follow by ID
        // Endpoint: GET api/follow/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var follow = await _context.Follows
                .FirstOrDefaultAsync(m => m.Id == id);
            if (follow == null)
            {
                return NotFound();
            }

            return Ok(follow);
        }

        // (3) Create a new Follow
        // Endpoint: POST api/follow
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,FollowerId,FolloweeId,CreatedAt")] Follow follow)
        {
            if (ModelState.IsValid)
            {
                _context.Add(follow);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Details), new { id = follow.Id }, follow);
            }
            return BadRequest(ModelState);
        }

        // (4) Update an existing Follow
        // Endpoint: PUT api/follow/{id}
        [HttpPut("{id:int}")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,FollowerId,FolloweeId,CreatedAt")] Follow follow)
        {
            if (id != follow.Id)
            {
                return BadRequest("ID mismatch.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(follow);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FollowExists(follow.Id))
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

        // (5) Delete a Follow by ID
        // Endpoint: DELETE api/follow/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var follow = await _context.Follows
                .FirstOrDefaultAsync(m => m.Id == id);
            if (follow == null)
            {
                return NotFound();
            }

            _context.Follows.Remove(follow);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FollowExists(int id)
        {
            return _context.Follows.Any(e => e.Id == id);
        }
    }
}
