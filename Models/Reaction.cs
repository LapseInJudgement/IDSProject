using System;
using System.Collections.Generic;

namespace IDSCommunityProject.Models;

public partial class Reaction
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string RelatedType { get; set; } = null!;

    public int RelatedId { get; set; }

    public string ReactionType { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();

    public virtual User User { get; set; } = null!;
}
