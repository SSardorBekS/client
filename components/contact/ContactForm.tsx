"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import { Loader2, SendIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    department: "",
  });

  const departments = [
    { value: "support", label: "Texnik yordam" },
    { value: "sales", label: "Sotuvlar bo'limi" },
    { value: "business", label: "Biznes hamkorlik" },
    { value: "other", label: "Boshqa" },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // API call imitation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        department: "",
      });
    } catch (error) {
      toast.error("Xatolik yuz berdi. Qaytadan urinib ko'ring");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-lg shadow-sm"
    >
      <div className="grid grid-cols-1 gap-6">
        <div>
          <Label htmlFor="fullName">To'liq ism</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="Ism Familiya"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="example@mail.com"
          />
        </div>

        <div>
          <Label htmlFor="department">Bo'lim</Label>
          <Select
            value={formData.department}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, department: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Bo'limni tanlang" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept.value} value={dept.value}>
                  {dept.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="subject">Mavzu</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="Xabar mavzusi"
          />
        </div>

        <div>
          <Label htmlFor="message">Xabar</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 h-32"
            placeholder="Xabaringizni yozing..."
          />
        </div>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Yuborilmoqda...
          </>
        ) : (
          <>
            <SendIcon className="mr-2 h-4 w-4" />
            Yuborish
          </>
        )}
      </Button>
    </form>
  );
};
