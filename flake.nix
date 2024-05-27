{
  description = "A basic flake with a shell";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs =
    { nixpkgs
    , flake-utils
    , ...
    }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.default = pkgs.mkShell {
        shellHook = ''
          export CYPRESS_INSTALL_BINARY=0
          export CYPRESS_RUN_BINARY=${pkgs.cypress}/bin/Cypress
        '';
      };
    });
}
