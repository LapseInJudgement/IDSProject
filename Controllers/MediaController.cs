using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;

namespace IDSCommunityProject.Controllers
{
    [Route("api/media")]  // Define API route
    [ApiController]  // Use ApiController for API-specific behavior
    public class MediaController : ControllerBase // Use ControllerBase for API behavior
    {
        private readonly IdscommunityPlatformContext _context;

        public MediaController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // (1) Get all Media records
        // Endpoint: GET api/media
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var media = await _context.Media.ToListAsync();
            return Ok(media);
        }

        // (2) Get a specific Media by ID
        // Endpoint: GET api/media/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var media = await _context.Media
                .FirstOrDefaultAsync(m => m.MediaId == id);
            if (media == null)
            {
                return NotFound();
            }

            return Ok(media);
        }

        // (3) Create a new Media record
        // Endpoint: POST api/media
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("MediaId,RelatedType,RelatedId,MediaUrl,MediaType,CreatedAt,UpdatedAt,DeletedAt,Description")] Media media)
        {
            if (ModelState.IsValid)
            {
                _context.Add(media);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Details), new { id = media.MediaId }, media);
            }
            return BadRequest(ModelState);
        }

        // (4) Update an existing Media record
        // Endpoint: PUT api/media/{id}
        [HttpPut("{id:int}")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("MediaId,RelatedType,RelatedId,MediaUrl,MediaType,CreatedAt,UpdatedAt,DeletedAt,Description")] Media media)
        {
            if (id != media.MediaId)
            {
                return BadRequest("ID mismatch.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(media);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MediaExists(media.MediaId))
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

        // (5) Delete a Media record by ID
        // Endpoint: DELETE api/media/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var media = await _context.Media
                .FirstOrDefaultAsync(m => m.MediaId == id);
            if (media == null)
            {
                return NotFound();
            }

            _context.Media.Remove(media);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MediaExists(int id)
        {
            return _context.Media.Any(e => e.MediaId == id);
        }
    }
}
