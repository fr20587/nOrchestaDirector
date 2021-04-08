// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';

// Service
import { PrOtherAssetService } from './pr-other-asset.service';

// DTO
import { CreatePrOtherAssetDto } from './dto/create-pr-other-asset.dto';
import { UpdatePrOtherAssetDto } from './dto/update-pr-other-asset.dto';

@Controller('pr-other-asset')
export class PrOtherAssetController {
  constructor(private readonly prOtherAssetService: PrOtherAssetService) {}

  // Crear activo intangible
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrOtherAssetDto: CreatePrOtherAssetDto,
  ) {
    try {
      const asset = await this.prOtherAssetService.create(
        createPrOtherAssetDto,
      );
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Activo creado correctamente',
        asset,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los activos intangible
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const assets = await this.prOtherAssetService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        assets,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los activos intangible por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const assets = await this.prOtherAssetService.findAllByProject(projectID);
      return res.status(HttpStatus.OK).json({
        ok: true,
        assets,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un activo intagible
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const asset = await this.prOtherAssetService.findOne(id);
      if (!asset) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El mueble no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          asset,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Actualizar un activo intangible
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrOtherAssetDto: UpdatePrOtherAssetDto,
  ) {
    try {
      const updatedAsset = await this.prOtherAssetService.update(
        id,
        updatePrOtherAssetDto,
      );

      if (!updatedAsset) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El activo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Activo actualizado correctamente',
          updatedAsset,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Eliminar activo intangible
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteAsset = await this.prOtherAssetService.remove(id);
      if (!responseDeleteAsset) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El activo no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteAsset,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }
}
