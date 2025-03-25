import { create } from "zustand"

interface FormDataState {
  FirstName: string
  setFirstName: (FirstName: string) => void
  LastName: string
  setLastName: (LastName: string) => void
  email: string
  setEmail: (email: string) => void
  phone: string
  setPhone: (phone: string) => void
  projectType: string
  setProjectType: (projectType: string) => void
  projectDetails: string
  setProjectDetails: (projectDetails: string) => void
}

export const useFormDataStore = create<FormDataState>()((set) => ({
  FirstName: '',
  setFirstName: (FirstName: string) => set({ FirstName }),
  LastName: '',
  setLastName: (LastName: string) => set({ LastName }),
  email: '',
  setEmail: (email: string) => set({ email }),
  phone: '',
  setPhone: (phone: string) => set({ phone }),
  projectType: '',
  setProjectType: (projectType: string) => set({ projectType }),
  projectDetails: '',
  setProjectDetails: (projectDetails: string) => set({ projectDetails }),
}));
