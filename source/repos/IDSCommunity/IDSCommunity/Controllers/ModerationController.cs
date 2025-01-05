using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;

namespace IDSCommunityProject.Controllers
{
    [Route("api/moderation")]  // Define API route
    [ApiController]  // Use ApiController for API-specific behavior
    public class ModerationController : ControllerBase // Use ControllerBase for API behavior
    {
        private readonly IdscommunityPlatformContext _context;

        public ModerationController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // (1) Get all Moderations
        // Endpoint: GET api/moderation
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var moderations = await _context.Moderations.Include(m => m.Role).ToListAsync();
            return Ok(moderations);
        }

        // (2) Get a specific Moderation by ID
        // Endpoint: GET api/moderation/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var moderation = await _context.Moderations
                .Include(m => m.Role)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (moderation == null)
            {
                return NotFound();
            }

            return Ok(moderation);
        }

        // (3) Create a new Moderation record
        // Endpoint: POST api/moderation
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,RoleId,RelatedId,Reason,CreatedAt")] Moderation moderation)
        {
            if (ModelState.IsValid)
            {
                _context.Add(moderation);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Details), new { id = moderation.Id }, moderation);
            }
            return BadRequest(ModelState);
        }

        // (4) Update an existing Moderation record
        // Endpoint: PUT api/moderation/{id}
        [HttpPut("{id:int}")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,RoleId,RelatedId,Reason,CreatedAt")] Moderation moderation)
        {
            if (id != moderation.Id)
            {
                return BadRequest("ID mismatch.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(moderation);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ModerationExists(moderation.Id))
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

        // (5) Delete a Moderation record by ID
        // Endpoint: DELETE api/moderation/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var moderation = await _context.Moderations
                .FirstOrDefaultAsync(m => m.Id == id);
            if (moderation == null)
            {
                return NotFound();
            }

            _context.Moderations.Remove(moderation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModerationExists(int id)
        {
            return _context.Moderations.Any(e => e.Id == id);
        }
    }
}
