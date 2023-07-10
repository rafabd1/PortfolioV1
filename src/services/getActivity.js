import axios from "axios";

export const getActivity = async () => {
    try {
        const response = await axios.get(
          "https://api.github.com/users/Rafael-BD/events"
        );
        return response.data;
      } catch (error) {
        console.error("Falha ao obter a atividade do GitHub", error);
      }
}
