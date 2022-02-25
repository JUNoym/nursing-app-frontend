export type InputRegisterStaff = {
    name: string | null
    have_work?: boolean
    work_in?: string | Date | null
    work_out?: string | Date | null
}[]