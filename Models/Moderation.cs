using System;
using System.Collections.Generic;

namespace IDSCommunityProject.Models;

public partial class Moderation
{
    public int Id { get; set; }

    public int RoleId { get; set; }

    public int RelatedId { get; set; }

    public string Reason { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public virtual Role Role { get; set; } = null!;
}
