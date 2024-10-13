// Obtener el botón y el párrafo para mostrar el estado de la billetera
const connectButton = document.getElementById("connectWallet");
const walletStatus = document.getElementById("walletStatus");

// Función para conectar MetaMask
connectButton.onclick = async () => {
  if (window.ethereum) {
    try {
      // Solicitar al usuario que conecte MetaMask
      await ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Actualizar el botón y el estado de la billetera cuando esté conectada
      connectButton.classList.add("connected");
      connectButton.innerText = "Conectado exitosamente";
      walletStatus.innerText = `Billetera conectada: ${address}`;
    } catch (error) {
      console.error("Error al conectar MetaMask:", error);
    }
  } else {
    alert("Por favor, instala MetaMask.");
  }
};

// Función para comprobar si MetaMask ya está conectada al cargar la página
window.addEventListener("load", async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();

    if (accounts.length > 0) {
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Actualizar el botón y el estado de la billetera cuando esté conectada
      connectButton.classList.add("connected");
      connectButton.innerText = "Conectado exitosamente";
      walletStatus.innerText = `Billetera conectada: ${address}`;
    } else {
      console.log("No hay cuentas conectadas");
    }
  } else {
    console.log("MetaMask no está instalada.");
  }
});
