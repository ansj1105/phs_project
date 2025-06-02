"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Calendar, Reply, Check } from "lucide-react"

interface ContactInquiry {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  date: string
  status: "new" | "replied" | "resolved"
  reply?: string
}

export function ContactManager() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      message: "I would like to make a reservation for 6 people this Saturday evening. Do you have availability?",
      date: "2024-01-15",
      status: "new",
    },
    {
      id: "2",
      name: "Sarah Smith",
      email: "sarah@example.com",
      message: "The food was amazing last night! Thank you for the wonderful service. I will definitely be back.",
      date: "2024-01-14",
      status: "replied",
      reply: "Thank you so much for your kind words! We look forward to serving you again soon.",
    },
  ])

  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyText, setReplyText] = useState("")

  const handleReply = (id: string) => {
    setReplyingTo(id)
    const inquiry = inquiries.find((inq) => inq.id === id)
    setReplyText(inquiry?.reply || "")
  }

  const handleSaveReply = () => {
    if (replyingTo && replyText.trim()) {
      setInquiries((prev) =>
        prev.map((inq) => (inq.id === replyingTo ? { ...inq, reply: replyText, status: "replied" as const } : inq)),
      )
      setReplyingTo(null)
      setReplyText("")
    }
  }

  const handleMarkResolved = (id: string) => {
    setInquiries((prev) => prev.map((inq) => (inq.id === id ? { ...inq, status: "resolved" as const } : inq)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500"
      case "replied":
        return "bg-green-500"
      case "resolved":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id} className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{inquiry.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {inquiry.email}
                        </span>
                        {inquiry.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {inquiry.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(inquiry.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <Badge className={getStatusColor(inquiry.status)}>{inquiry.status}</Badge>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Message:</h5>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded">{inquiry.message}</p>
                  </div>

                  {inquiry.reply && (
                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Your Reply:</h5>
                      <p className="text-gray-700 bg-blue-50 p-3 rounded border-l-4 border-blue-500">{inquiry.reply}</p>
                    </div>
                  )}

                  {replyingTo === inquiry.id ? (
                    <div className="space-y-3">
                      <Textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply..."
                        rows={4}
                      />
                      <div className="flex gap-2">
                        <Button onClick={handleSaveReply} size="sm">
                          <Reply className="h-4 w-4 mr-1" />
                          Send Reply
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setReplyingTo(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleReply(inquiry.id)}>
                        <Reply className="h-4 w-4 mr-1" />
                        {inquiry.reply ? "Edit Reply" : "Reply"}
                      </Button>
                      {inquiry.status !== "resolved" && (
                        <Button variant="outline" size="sm" onClick={() => handleMarkResolved(inquiry.id)}>
                          <Check className="h-4 w-4 mr-1" />
                          Mark Resolved
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
