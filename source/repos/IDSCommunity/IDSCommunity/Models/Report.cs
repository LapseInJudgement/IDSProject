using System;
using System.Collections.Generic;

namespace IDSCommunityProject.Models;

public partial class Report
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int PostId { get; set; }

    public int CommentId { get; set; }

    public string ReportedType { get; set; } = null!;

    public string Reason { get; set; } = null!;

    public string Status { get; set; } = null!;

    public virtual Comment Comment { get; set; } = null!;

    public virtual Post Post { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
