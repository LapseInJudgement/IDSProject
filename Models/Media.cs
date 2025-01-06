using System;
using System.Collections.Generic;

namespace IDSCommunityProject.Models;

public partial class Media
{
    public int MediaId { get; set; }

    public string RelatedType { get; set; } = null!;

    public int RelatedId { get; set; }

    public string MediaUrl { get; set; } = null!;

    public string MediaType { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public DateTime? DeletedAt { get; set; }

    public string? Description { get; set; }
}
