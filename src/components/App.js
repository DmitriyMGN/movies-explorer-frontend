
return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Header  />
      <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
