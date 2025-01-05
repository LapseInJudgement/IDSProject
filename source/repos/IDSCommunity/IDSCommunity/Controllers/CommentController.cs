using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;
using Microsoft.Extensions.Hosting;

namespace IDSCommunityProject.Controllers
{
    [ApiController]
    [Route("api/Comment")]
    public class CommentController : ControllerBase
    {
        private readonly IdscommunityPlatformContext _context;

        public CommentController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // GET: api/Comment
        [HttpGet]
        public async Task<IActionResult> GetComments()
        {
            var comments = await _context.Comments.Include(c => c.User).ToListAsync();
            return Ok(comments);
        }

        // GET: Comment/Details/
        [HttpGet("{Id}")]
        public async Task<IActionResult> GetComment(int? id)
        {

            if (id == null)
            {
                return NotFound();
            }

            var comment = await _context.Comments
                .Include(c => c.Post)
                .Include(c => c.User)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment);
        }



        // POST: api/comment

        [HttpPost]
        public async Task<IActionResult> CommentComment([FromBody] Comment comment)
        {
            if (ModelState.IsValid)
            {
                _context.Comments.Add(comment);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetComment), new { id = comment.Id }, comment);
            }
            return BadRequest();

        }

        // PUT: Comment/Edit/
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComment(int id, [FromBody] Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }
            _context.Entry(comment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id))
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

        // POST: Comment/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.


        // GET: Comment/Delete/
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(int id)
        {


            var comment = await _context.Comments
                .Include(c => c.Post)
                .Include(c => c.User)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment);
        }
        private bool CommentExists(int id)
        {
            return _context.Comments.Any(e => e.Id == id);
        }
        [HttpGet("{postId}/Reactions")]
        public async Task<IActionResult> GetReactions(int postId)
        {
            var reactions = await _context.Reactions.Where(r => r.RelatedId == postId).ToListAsync();
            return Ok(reactions);
        }

        // POST: api/Post/Reactions
        [HttpPost("{commentId}/Reactions")]
        public async Task<IActionResult> AddReaction(int commentId, [FromBody] Reaction reaction)
        {
            var post = await _context.Posts.FindAsync(commentId);
            if (post == null)
            {
                return NotFound();
            }

            reaction.RelatedId = commentId;
            _context.Reactions.Add(reaction);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetReactions), new { postId = commentId }, reaction);
        }

        // DELETE: api/Post/5/Reactions/10
        [HttpDelete("{postId}/Reactions/{reactionId}")]
        public async Task<IActionResult> DeleteReaction(int postId, int reactionId)
        {
            var reaction = await _context.Reactions
                .FirstOrDefaultAsync(r => r.RelatedId == postId && r.Id == reactionId);

            if (reaction == null)
            {
                return NotFound();
            }

            _context.Reactions.Remove(reaction);
            await _context.SaveChangesAsync();

            return NoContent();
        }


    }
}
