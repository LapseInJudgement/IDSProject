﻿using System;
using System.Collections.Generic;

namespace IDSCommunityProject.Models;

public partial class Follow
{
    public int Id { get; set; }

    public int FollowerId { get; set; }

    public int FolloweeId { get; set; }

    public DateTime CreatedAt { get; set; }
}
