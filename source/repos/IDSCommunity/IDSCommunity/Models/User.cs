using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace IDSCommunityProject.Models;

[Index(nameof(Email), IsUnique = true)]
[Index(nameof(Username))]
public partial class User
{
    public int Id { get; set; }

    public int RoleId { get; set; }

    public required string Username { get; set; } 

    public string Email { get; set; } = null!;

    public string? Country { get; set; }

    public int? Age { get; set; }

    public string PasswordHash { get; set; } = null!;


    public bool IsDeleted { get; set; }

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();

    public virtual ICollection<Post> Posts { get; set; } = new List<Post>();

    public virtual ICollection<Reaction> Reactions { get; set; } = new List<Reaction>();

    public virtual ICollection<Report> Reports { get; set; } = new List<Report>();

    public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
}
