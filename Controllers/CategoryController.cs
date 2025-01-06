using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;

namespace IDSCommunityProject.Controllers
{
    [Route("api/category")]  // Define API route
    [ApiController]  // Added ApiController for API-specific behavior
    public class CategoryController : ControllerBase // Use ControllerBase for API-specific behavior
    {
        private readonly IdscommunityPlatformContext _context;

        public CategoryController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // (1) Get all Categories
        // Endpoint: GET api/category
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var categories = await _context.Categories.ToListAsync();
            return Ok(categories);
        }

        // (2) Get a specific Category by ID
        // Endpoint: GET api/category/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // (3) Create a new Category
        // Endpoint: POST api/category
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Description")] Category category)
        {
            if (ModelState.IsValid)
            {
                _context.Add(category);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Details), new { id = category.Id }, category);
            }
            return BadRequest(ModelState);
        }

        // (4) Update an existing Category
        // Endpoint: PUT api/category/{id}
        [HttpPut("{id:int}")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Description")] Category category)
        {
            if (id != category.Id)
            {
                return BadRequest("ID mismatch.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(category);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CategoryExists(category.Id))
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

        // (5) Delete a Category by ID
        // Endpoint: DELETE api/category/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (category == null)
            {
                return NotFound();
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.Id == id);
        }
    }
}
