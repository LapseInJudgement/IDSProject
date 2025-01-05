using System;
using System.Collections.Generic;

namespace IDSCommunityProject.Models;

public partial class Permission
{
    public int PermissionId { get; set; }

    public string ActionName { get; set; } = null!;

    public virtual ICollection<RolePermission> RolePermissions { get; set; } = new List<RolePermission>();
}
