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
    [Route("api/userCategory")]
    [ApiController]
    public class UserCategoryController : Controller
    {
        private readonly IdscommunityPlatformContext _context;

        public UserCategoryController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // (1) Retrieve all UserCategories
        // Endpoint: GET api/userCategory
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return Ok(await _context.UserCategories.ToListAsync());
        }

        // (2) Retrieve a specific UserCategory by ID
        // Endpoint: GET api/userCategory/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userCategory = await _context.UserCategories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (userCategory == null)
            {
                return NotFound();
            }

            return Ok(userCategory);
        }

        // (3) Create a new UserCategory
        // Endpoint: POST api/userCategory
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Title,About")] UserCategory userCategory)
        {
            if (ModelState.IsValid)
            {
                _context.Add(userCategory);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Details), new { id = userCategory.Id }, userCategory);
            }
            return BadRequest(ModelState);
        }

        // (4) Update an existing UserCategory
        // Endpoint: PUT api/userCategory/{id}
        [HttpPut("{id:int}")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Title,About")] UserCategory userCategory)
        {
            if (id != userCategory.Id)
            {
                return BadRequest("ID mismatch.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(userCategory);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserCategoryExists(userCategory.Id))
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

        // (5) Delete a UserCategory
        // Endpoint: DELETE api/userCategory/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userCategory = await _context.UserCategories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (userCategory == null)
            {
                return NotFound();
            }

            _context.UserCategories.Remove(userCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserCategoryExists(int id)
        {
            return _context.UserCategories.Any(e => e.Id == id);
        }
    }
}
