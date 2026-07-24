"use client";

import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses, siteConfig, whatsappLink, mailtoLink } from "@/lib/site-config";

type FormState = {
  name: string;
  age: string;
  course: string;
  time: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  age: "",
  course: courses[0].title,
  time: "",
  message: "",
};

function buildMessage(form: FormState): string {
  return [
    `Assalamu alaikum! I'd like to enrol at ${siteConfig.name}.`,
    "",
    `Name: ${form.name || "—"}`,
    `Age: ${form.age || "—"}`,
    `Course: ${form.course}`,
    `Preferred time: ${form.time || "—"}`,
    form.message ? `Message: ${form.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function EnrollForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const message = buildMessage(form);
  const waHref = whatsappLink(message);
  const emailHref = mailtoLink(
    `Enrolment enquiry — ${form.name || "New student"}`,
    message,
  );

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Enrolment enquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            value={form.name}
            onChange={update("name")}
            placeholder="e.g. Ahmed Khan"
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age">Student age</Label>
          <Input
            id="age"
            value={form.age}
            onChange={update("age")}
            placeholder="e.g. 9"
            inputMode="numeric"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="course">Course</Label>
          <Select
            value={form.course}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, course: value ?? prev.course }))
            }
          >
            <SelectTrigger id="course" className="w-full">
              <SelectValue placeholder="Choose a course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course.slug} value={course.title}>
                  {course.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Preferred time</Label>
          <Input
            id="time"
            value={form.time}
            onChange={update("time")}
            placeholder="e.g. Weekdays after 6 PM GMT"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Anything else? (optional)</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your goals or any questions."
          rows={4}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="flex-1">
          <a href={waHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Send on WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1">
          <a href={emailHref}>
            <Mail className="h-4 w-4" />
            Email us instead
          </a>
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Your details are only used to start the conversation — nothing is stored
        on this website.
      </p>
    </form>
  );
}
