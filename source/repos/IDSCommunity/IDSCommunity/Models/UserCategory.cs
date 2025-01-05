using System;
using System.Collections.Generic;

namespace IDSCommunityProject.Models;

public partial class UserCategory
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string About { get; set; } = null!;
}
