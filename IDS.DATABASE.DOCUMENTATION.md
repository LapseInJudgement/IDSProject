**Database Schema**

This document provides a structured explanation of our database schema with suggested indexing for optimal performance and scalability.

---

### **1. User Table**

Tracks user information.

#### **Columns**:

- **UserID** (PK): Primary key, uniquely identifies each user.
- **RoleID** (FK): Foreign key, display role of the user.
- **UserName** [Unique]: Unique username for each user.
- **Email** [Unique]: Unique email from the user for authentication.
- **Location**: User’s location.
- **Age**: User’s age.

#### **Indexes**:

```sh
- UserID: Automatically indexed as a primary key.
- UserName and Email: Indexed as unique constraints to enforce uniqueness.
```

---

### **2. Post Table**

Tracks posts created by users.

#### **Columns**:

- **PostID** (PK): Primary key, uniquely identifies each post.
- **UserID** (FK) [IDX]: Links the post to the user who created it.
- **Title**: Title of the post.
- **Content**: Body of the post.
- **CreatedAt** [IDX]: Timestamp of when the post was created.
- **DeletedAt**: Soft delete timestamp.

#### **Indexes**:

```sh
- PostID: Automatically indexed as a primary key.
- UserID: Indexed for efficient joins with the User table.
- CreatedAt: Indexed for sorting or filtering by creation time.
```

---

### **3. Comment Table**

Tracks comments on posts.

#### **Columns**:

- **CommentID** (PK): Primary key, uniquely identifies each comment.
- **UserID** (FK) [IDX]: Links the comment to the user who created it.
- **PostID** (FK) [IDX]: Links the comment to the related post.
- **Content**: Body of the comment.
- **CreatedAt** [IDX]: Timestamp of when the comment was created.
- **DeletedAt**: Soft delete timestamp.

#### **Indexes**:

```sh
- CommentID: Automatically indexed as a primary key.
- UserID and PostID: Indexed for efficient joins with User and Post tables.
- CreatedAt: Indexed for sorting or filtering by creation time.
```

---

### **4. Reaction Table**

Tracks user's reaction on posts or comments.

#### **Columns**:

- **ReactionID** (PK): Primary key, uniquely identifies each reaction.
- **UserID** (FK) [IDX]: Links the reaction to the user who made it.
- **RelatedType**: Specifies if the reaction is on a post or comment.
- **RelatedID** [IDX]: ID of the related entity (PostID or CommentID).
- **ReactionType**: Type of reaction (e.g., like, love).
- **CreatedAt**: Timestamp of when the reaction was made.

#### **Indexes**:

```sh
- ReactionID: Automatically indexed as a primary key.
- UserID and RelatedID: Indexed for efficient filtering and joins.
```

---

### **5. Notification Table**

Tracks notifications sent to users.

#### **Columns**:

- **NotificationID** (PK): Primary key, uniquely identifies each notification.
- **UserID** (FK) [IDX]: Links the notification to the recipient user.
- **ReactionID** (FK) [IDX]: Links the notification to the related reaction.
- **RelatedID** [IDX]: ID of the related entity (PostID or CommentID).
- **RelatedType**: Specifies if the notification is about a post or comment.
- **ActionType**: Type of action triggering the notification.
- **CreatedAt**: Timestamp of when the notification was created.
- **Message**: Descriptive message shown under the notification.
- **IsRead**: Boolean indicating if the notification has been read.

#### **Indexes**:

```sh
- NotificationID: Automatically indexed as a primary key.
- UserID, ReactionID, and RelatedID: Indexed for frequent joins and filtering.
```

---

### **6. Category Table**

Defines content categories

#### **Columns**:

- **CategoryID** (PK): Primary key, uniquely identifies each category.
- **Description**: Description of the category.

#### **Indexes**:

```sh
- CategoryID: Automatically indexed as a primary key.
```

---

### **7. UserCategory Table**

Links users to categories they follow.

#### **Columns**:

- **UserID** (FK): Links to the User table.
- **CategoryID** (FK): Links to the Category table.

#### **Indexes**:

```sh
- Composite primary key (UserID, CategoryID): Automatically indexed.
```

---

### **8. Moderation Table**

Tracks moderation actions on posts and comments.

#### **Columns**:

- **FlagID** (PK): Primary key, uniquely identifies each moderation action.
- **RoleID** (FK) [IDX]: Links the action to the role responsible (e.g., moderator).
- **RelatedID** (FK) [IDX]: Links to the moderated content.
- **Reason**: Reason for the moderation action.
- **CreatedAt**: Timestamp of the moderation action.

#### **Indexes**:

```sh
- FlagID: Automatically indexed as a primary key.
- RoleID, PostID, and CommentID: Indexed for efficient joins and queries.
```

---

### **9. Media Table**

Tracks media (e.g., images, GIFs, videos) included in posts or comments.

#### **Columns**:

- **MediaID** (PK): Primary key, uniquely identifies each media file.
- **RelatedType**: Specifies if the media is linked to a post or comment.
- **RelatedID** [IDX]: ID of the related entity (PostID or CommentID).
- **MediaUrl**: URL or path to the media file.
- **MediaType**: Type of media (e.g., image, video).
- **CreatedAt**: Timestamp of when the media was created.
- **UpdatedAt**: Timestamp of the last update.
- **DeletedAt**: Soft delete timestamp.
- **Description**: Optional prompt if media content detected only.

#### **Indexes**:

```sh
- MediaID: Automatically indexed as a primary key.
- RelatedID: Indexed for efficient joins.
```

---

### **10. Follow Table**

Tracks user-to-user following relationships.

#### **Columns**:

- **FollowID** (PK): Primary key, uniquely identifies each follow relationship.
- **FollowerID** (FK) [IDX]: Links to the user following someone.
- **FolloweeID** (FK) [IDX]: Links to the user being followed.
- **CreatedAt**: Timestamp of when the follow was initiated.

#### **Indexes**:

```sh
- FollowID: Automatically indexed as a primary key.
- FollowerID and FolloweeID: Indexed for efficient filtering and joins.
```

---

### **11. Report Table**

Tracks reports on posts or comments.

#### **Columns**:

- **ReportID** (PK): Primary key, uniquely identifies each report.
- **UserID** (FK) [IDX]: Links to the user who reported the content.
- **ReportedID** (FK) [IDX]: ID of the reported entity (PostID or CommentID).
- **ReportedType**: Specifies if the report is about a post or comment.
- **Reason**: Reason for the report.
- **Status**: Current status of the report (e.g., pending, resolved).
- **CreatedAt**: Timestamp of when the report was created.
- **UpdatedAt**: Timestamp of the last status update.

#### **Indexes**:

```sh
- ReportID: Automatically indexed as a primary key.
- UserID and ReportedID: Indexed for efficient joins and filtering.
```

---

### **12. Role and Permission Tables**

#### **Role Table**:

Defines user role (e.g., Admin, Moderator, User).

- **RoleID** (PK): Primary key, uniquely identifies each role.
- **RoleName**: Name of the role.

#### **Permission Table**:

Defines permission (e.g., ViewPost, EditPost).

- **PermissionID** (PK): Primary key, uniquely identifies each permission.
- **PermissionName**: Name of the permission.
- **Description**: What each role has access to.

#### **RolePermission Table**:

Links role to permission.

- **RolePermissionID** (PK): Primary key, uniquely identifies each role-permission relationship.
- **RoleID** (FK) [IDX]: Links to the Role table.
- **PermissionID** (FK) [IDX]: Links to the Permission table.

#### **UserRole Table**:

Links user to role.

- **UserRoleID** (PK): Primary key, uniquely identifies each user-role relationship.
- **UserID** (FK) [IDX]: Links to the User table.
- **RoleID** (FK) [IDX]: Links to the Role table.

#### **Indexes**:

```sh
- RoleID and PermissionID in the RolePermission table.
- UserID and RoleID in the UserRole table.
```

---
