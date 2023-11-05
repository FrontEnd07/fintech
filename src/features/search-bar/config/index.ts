import { SelectOption } from "../../drop-down/types";

export const generes: SelectOption[] = [
    { value: "", label: "Фильтр" },
    { value: "1", label: "Электроника" },
    { value: "2", label: "Обувь" },
    { value: "3", label: "Другое" }
]

export const sort: SelectOption[] = [
    { value: "1", label: "Цена по убиванию" },
    { value: "2", label: "Цена по возростанию" },
    { value: "3", label: "По популярности" },
    { value: "4", label: "По умолчанию" },
]