using System;
using System.Collections.Generic;

namespace IDSCommunityProject.Models;

public partial class Notification
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int ReactionId { get; set; }

    public int RelatedId { get; set; }

    public string RelatedType { get; set; } = null!;

    public string ActionType { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public string Message { get; set; } = null!;

    public bool? IsRead { get; set; }

    public virtual Reaction Reaction { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
