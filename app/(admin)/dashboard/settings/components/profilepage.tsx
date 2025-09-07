"use client"

import { useState } from "react"
import { Edit, ChevronDown } from "lucide-react"

interface ProfileData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  language: string
}

const PROFILE_IMAGE_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"

const LANGUAGE_OPTIONS = ["English", "Spanish", "French", "German"]

export default function ProfilePage() {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false)
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "Courtney",
    lastName: "Henry",
    email: "debra.holt@example.com",
    phone: "016735555728",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    language: "English",
  })

  const updateProfileField = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setIsEditingPersonalInfo(false)
    setIsEditingProfile(false)
  }

  const handleCancel = () => {
    setIsEditingPersonalInfo(false)
    setIsEditingProfile(false)
  }

  const isInEditMode = isEditingPersonalInfo || isEditingProfile

  return (
    <div className=" flex justify-center">
      <div className="w-full p-4 bg-white rounded-xl shadow-[0px_4px_33px_8px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4">
        {/* Profile Section */}
        <ProfileSection
          isEditing={isEditingProfile}
          onEdit={() => setIsEditingProfile(true)}
          profileData={profileData}
        />

        {/* Personal Info Section */}
        <PersonalInfoSection
          isEditing={isEditingPersonalInfo}
          onEdit={() => setIsEditingPersonalInfo(true)}
          profileData={profileData}
          onUpdateField={updateProfileField}
        />

        {/* Action Buttons */}
        {isInEditMode && <ActionButtons onSave={handleSave} onCancel={handleCancel} />}
      </div>
    </div>
  )
}

function ProfileSection({
  isEditing,
  onEdit,
  profileData,
}: {
  isEditing: boolean
  onEdit: () => void
  profileData: ProfileData
}) {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="My Profile" />

      <div className="px-5 py-6 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-between items-start">
        <div className="flex items-center gap-3.5">
          <img className="w-20 h-20 rounded-full" src={PROFILE_IMAGE_URL || "/placeholder.svg"} alt="Profile" />

          {isEditing ? (
            <ProfileImageButtons />
          ) : (
            <ProfileInfo name={`${profileData.firstName} ${profileData.lastName}`} email={profileData.email} />
          )}
        </div>

        {!isEditing && <EditButton onClick={onEdit} />}
      </div>
    </div>
  )
}

function ProfileImageButtons() {
  return (
    <div className="flex gap-4">
      <button className="px-3.5 py-2 bg-red-600 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-2.5 hover:bg-red-700 transition-colors">
        <span className="text-white text-sm font-medium font-['Roboto'] leading-tight">Change Profile Image</span>
      </button>
      <button className="px-3.5 py-2 rounded-md outline outline-1 outline-offset-[-1px] outline-red-600 flex items-center gap-2.5 hover:bg-red-50 transition-colors">
        <span className="text-red-600 text-sm font-medium font-['Roboto'] leading-tight">Remove Profile Image</span>
      </button>
    </div>
  )
}

function ProfileInfo({ name, email }: { name: string; email: string }) {
  return (
    <div className="w-40 flex flex-col gap-1">
      <div className="text-neutral-600 text-lg font-semibold font-['Roboto'] leading-snug">{name}</div>
      <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-snug">{email}</div>
    </div>
  )
}

function PersonalInfoSection({
  isEditing,
  onEdit,
  profileData,
  onUpdateField,
}: {
  isEditing: boolean
  onEdit: () => void
  profileData: ProfileData
  onUpdateField: (field: keyof ProfileData, value: string) => void
}) {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="Personal Info" />

      <div className="px-5 py-6 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-between items-start">
        {isEditing ? (
          <PersonalInfoForm profileData={profileData} onUpdateField={onUpdateField} />
        ) : (
          <PersonalInfoDisplay profileData={profileData} />
        )}

        {!isEditing && <EditButton onClick={onEdit} />}
      </div>
    </div>
  )
}

function PersonalInfoDisplay({ profileData }: { profileData: ProfileData }) {
  const fields = [
    [
      { label: "First Name", value: profileData.firstName },
      { label: "Last Name", value: profileData.lastName },
    ],
    [
      { label: "Email Address", value: profileData.email },
      { label: "Phone Number", value: profileData.phone },
    ],
    [
      { label: "Address", value: profileData.address },
      { label: "Language", value: profileData.language },
    ],
  ]

  return (
    <div className="w-[636px] flex flex-col gap-6">
      {fields.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-start items-center gap-80">
          {row.map((field, fieldIndex) => (
            <div key={fieldIndex} className="flex items-center gap-3.5">
              <div className="w-40 flex flex-col gap-1">
                <div className="text-zinc-500 text-sm font-normal font-['Roboto'] leading-snug">{field.label}</div>
                <div className="text-neutral-600 text-sm font-medium font-['Roboto']">{field.value}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function PersonalInfoForm({
  profileData,
  onUpdateField,
}: {
  profileData: ProfileData
  onUpdateField: (field: keyof ProfileData, value: string) => void
}) {
  const formFields = [
    [
      { key: "firstName" as keyof ProfileData, label: "First Name", type: "text" },
      { key: "lastName" as keyof ProfileData, label: "Last Name", type: "text" },
    ],
    [
      { key: "email" as keyof ProfileData, label: "Email Address", type: "email" },
      { key: "phone" as keyof ProfileData, label: "Phone Number", type: "tel" },
    ],
    [
      { key: "address" as keyof ProfileData, label: "Address", type: "text" },
      { key: "language" as keyof ProfileData, label: "Language", type: "select" },
    ],
  ]

  return (
    <div className="flex flex-col gap-6">
      {formFields.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-6">
          {row.map((field, fieldIndex) => (
            <FormField
              key={fieldIndex}
              label={field.label}
              type={field.type}
              value={profileData[field.key]}
              onChange={(value) => onUpdateField(field.key, value)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function FormField({
  label,
  type,
  value,
  onChange,
}: {
  label: string
  type: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="w-80 flex flex-col gap-2">
      <label className="text-neutral-600 text-sm font-medium font-['Roboto']">{label}</label>
      <div className="h-9 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-2.5 relative">
        {type === "select" ? (
          <>
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="flex-1 text-zinc-500 text-sm font-normal font-['Roboto'] leading-snug bg-transparent outline-none appearance-none"
            >
              {LANGUAGE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          </>
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 text-zinc-500 text-sm font-normal font-['Roboto'] leading-snug bg-transparent outline-none"
          />
        )}
      </div>
    </div>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex justify-start items-start gap-20">
      <div className="text-neutral-600 text-lg font-semibold font-['Roboto'] leading-snug">{title}</div>
    </div>
  )
}

function EditButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3.5 py-2 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-2.5 hover:bg-gray-100 transition-colors"
    >
      <span className="text-neutral-600 text-sm font-medium font-['Roboto'] leading-tight">Edit</span>
      <Edit className="w-5 h-5 text-neutral-600" />
    </button>
  )
}

function ActionButtons({
  onSave,
  onCancel,
}: {
  onSave: () => void
  onCancel: () => void
}) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onCancel}
        className="w-40 px-4 py-3 bg-slate-950/5 rounded-[10px] flex justify-center items-center hover:bg-slate-950/10 transition-colors"
      >
        <span className="text-neutral-600 text-lg font-medium font-['Roboto'] leading-normal">Cancel</span>
      </button>
      <button
        onClick={onSave}
        className="px-4 py-3 bg-red-600 rounded-[10px] flex justify-center items-center hover:bg-red-700 transition-colors"
      >
        <span className="text-white text-lg font-medium font-['Roboto'] leading-normal">Save & Changes</span>
      </button>
    </div>
  )
}
