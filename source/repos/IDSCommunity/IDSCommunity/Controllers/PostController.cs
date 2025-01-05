using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDSCommunityProject.Models;
using System.Linq;
using System.Threading.Tasks;

namespace IDSCommunityProject.Controllers.Api
{
    [Route("api/Post")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IdscommunityPlatformContext _context;

        public PostController(IdscommunityPlatformContext context)
        {
            _context = context;
        }

        // GET: api/Post
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _context.Posts.Include(p => p.User).ToListAsync();
            return Ok(posts);
        }

        // GET: api/Post/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            var post = await _context.Posts
                .Include(p => p.User)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        // POST: api/Post
        [HttpPost]
        public async Task<IActionResult> PostPost([FromBody] Post post)
        {
            if (ModelState.IsValid)
            {
                _context.Posts.Add(post);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);
            }
            return BadRequest();
        }

        // PUT: api/Post/
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPost(int id, [FromBody] Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _context.Entry(post).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
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

        // DELETE: api/Post/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostExists(int id)
        {
            return _context.Posts.Any(e => e.Id == id);
        }

        [HttpGet("{postId}/Reactions")]
        public async Task<IActionResult> GetReactions(int postId)
        {
            var reactions = await _context.Reactions.Where(r => r.RelatedId == postId).ToListAsync();
            return Ok(reactions);
        }

        // POST: api/Post/Reactions
        [HttpPost("{postId}/Reactions")]
        public async Task<IActionResult> AddReaction(int postId, [FromBody] Reaction reaction)
        {
            var post = await _context.Posts.FindAsync(postId);
            if (post == null)
            {
                return NotFound();
            }

            reaction.RelatedId = postId;
            _context.Reactions.Add(reaction);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetReactions), new { postId = postId }, reaction);
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
