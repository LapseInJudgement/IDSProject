using FluentAssertions.Common;
using IDSCommunityProject.Data;
using IDSCommunityProject.Models;
using IDSCommunityProject.Services;
using IDSCommunityProject.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// connection string for scaffolded database
builder.Services.AddDbContext<IdscommunityPlatformContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

//connection string for customizable context
builder.Services.AddDbContext<AppDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

//connection for the Services/Interfaces
builder.Services.AddScoped<IUserService, UserService>();




// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); // Add Swagger

var app = builder.Build();

// configure the HTTP request 

app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MY API V1");
        c.RoutePrefix = string.Empty;
    });
}


app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
