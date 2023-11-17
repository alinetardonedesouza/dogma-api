interface AcelerometroData {
    id: string;
    collarId: string;
    x: string;
    y: string;
    z: string;
}

interface StatusObj {
    id: string;
    collarId: string;
    status: string;
}

export class AcelerometerCounts {

    extrairDadosAcelerometro(response: AcelerometroData[]): StatusObj[] {
        const result: StatusObj[] = [];

        for (const leitura of response) {
            const x = parseFloat(leitura.x);
            const y = parseFloat(leitura.y);
            const z = parseFloat(leitura.z);

            const velocidadeMedia = this.calcularVelocidadeMedia(x, y, z, 5);

            const status = this.categorizeState(velocidadeMedia);

            result.push({
                id: leitura.id,
                collarId: leitura.collarId,
                status: status
            });
        }

        console.log(result)

        return result;
    }

    calcularVelocidadeMedia(x: number, y: number, z: number, intervaloDeTempo: number): number {
        const deltaDx = x;
        const deltaDy = y;
        const deltaDz = z;

        const deltaDTotal = Math.sqrt(deltaDx ** 2 + deltaDy ** 2 + deltaDz ** 2);

        const velocidadeMedia = deltaDTotal / intervaloDeTempo;

        return velocidadeMedia;
    }

    categorizeState(acceleration: number): string {
        const minValue = -156.91;
        const maxValue = 156.91;
        const minRepouso = -1.0;
        const maxRepouso = -0.5;
        const minNormal = -0.5;
        const maxNormal = 0.5;

        // Normalize os valores de aceleração entre -1 e 1
        const normalizedAcceleration = (acceleration - minValue) / (maxValue - minValue) * 2 - 1;

        // Compare o valor normalizado com os limiares para categorizar o estado
        if (normalizedAcceleration >= minRepouso && normalizedAcceleration < maxRepouso) {
            return 'Repouso';
        } else if (normalizedAcceleration >= minNormal && normalizedAcceleration < maxNormal) {
            return 'Normal';
        } else {
            return 'Agitado';
        }
    }
}
