
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Check, Trash2, Filter, MoreHorizontal } from "lucide-react";

const NotificationsPage = () => {
  const [filter, setFilter] = useState("all");

  const notifications = [
    {
      id: "1",
      type: "assignment",
      title: "New Training Assignment",
      message: "You have been assigned to complete 'Customer Onboarding Process' training",
      timestamp: "2 hours ago",
      read: false,
      priority: "high"
    },
    {
      id: "2", 
      type: "quiz",
      title: "Quiz Completed",
      message: "Sarah Johnson completed 'Safety Protocol Assessment' with 95% score",
      timestamp: "4 hours ago", 
      read: false,
      priority: "medium"
    },
    {
      id: "3",
      type: "sop",
      title: "SOP Updated",
      message: "Quality Control Checklist has been updated with new requirements",
      timestamp: "1 day ago",
      read: true,
      priority: "medium"
    },
    {
      id: "4",
      type: "system",
      title: "System Maintenance",
      message: "Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST",
      timestamp: "2 days ago",
      read: true,
      priority: "low"
    },
    {
      id: "5",
      type: "assignment",
      title: "Training Overdue",
      message: "Emergency Response Procedures training is overdue for 3 team members",
      timestamp: "3 days ago",
      read: false,
      priority: "high"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return "📚";
      case "quiz":
        return "✅";
      case "sop":
        return "📋";
      case "system":
        return "⚙️";
      default:
        return "📢";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "unread") return !notification.read;
    if (filter === "read") return notification.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0D1B2A]">Notifications</h1>
          <p className="text-gray-600">
            Stay updated with your training activities
            {unreadCount > 0 && (
              <Badge className="ml-2 bg-red-100 text-red-800">
                {unreadCount} unread
              </Badge>
            )}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Check className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-white shadow-sm" : ""}
            >
              All ({notifications.length})
            </Button>
            <Button
              variant={filter === "unread" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("unread")}
              className={filter === "unread" ? "bg-white shadow-sm" : ""}
            >
              Unread ({unreadCount})
            </Button>
            <Button
              variant={filter === "read" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("read")}
              className={filter === "read" ? "bg-white shadow-sm" : ""}
            >
              Read ({notifications.length - unreadCount})
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`transition-all hover:shadow-md ${
              !notification.read ? 'border-l-4 border-l-[#36CFC9] bg-blue-50/30' : ''
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="text-2xl">{getTypeIcon(notification.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={`font-medium ${!notification.read ? 'text-[#0D1B2A]' : 'text-gray-700'}`}>
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-[#36CFC9] rounded-full"></div>
                      )}
                      <Badge className={getPriorityColor(notification.priority)}>
                        {notification.priority}
                      </Badge>
                    </div>
                    <p className={`text-sm ${!notification.read ? 'text-gray-700' : 'text-gray-500'}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {notification.timestamp}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {!notification.read && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Check className="w-4 h-4" />
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No notifications found
            </h3>
            <p className="text-gray-600">
              {filter === "unread" 
                ? "You're all caught up! No unread notifications."
                : "You don't have any notifications yet."
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NotificationsPage;
