import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    validCep = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(""),
    [searchFinished, setSearchFinished] = useState(false),
    [loading, setLoading] = useState(false),
    [dayLaborers, setDayLaborers] = useState([] as UserShortInterface[]),
    [remainingDayLaborers, setRemainingDayLaborers] = useState(0);

  async function searchProfessionals(cep: string) {
    setSearchFinished(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDayLaborers(data.diaristas);
      setRemainingDayLaborers(data.quantidade_diaristas);
      setSearchFinished(true);
    } catch (err) {
      setError("CEP não encontrado");
    }
    setLoading(false);
  }

  return {
    cep,
    setCep,
    validCep,
    searchProfessionals,
    error,
    dayLaborers,
    searchFinished,
    loading,
    remainingDayLaborers,
  };
}
