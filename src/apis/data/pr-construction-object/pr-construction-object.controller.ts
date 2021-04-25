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
import { PrConstructionObjectService } from './pr-construction-object.service';

// DTO
import { CreatePrConstructionObjectDto } from './dto/create-pr-construction-object.dto';
import { UpdatePrConstructionObjectDto } from './dto/update-pr-construction-object.dto';

@Controller('pr-construction-object')
export class PrConstructionObjectController {
  constructor(
    private readonly prConstructionObjectService: PrConstructionObjectService,
  ) {}

  // Crear objeto de obra
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrConstructionObjectDto: CreatePrConstructionObjectDto,
  ) {
    try {
      const constructionObject = await this.prConstructionObjectService.create(
        createPrConstructionObjectDto,
      );
      if (
        constructionObject ===
        'Ya existe un objeto de obra con este nombre para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          constructionObject,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Objeto de obra creado correctamente',
          constructionObject,
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

  // Obtener todos los objetos de obra
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const constructionObjects = await this.prConstructionObjectService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        constructionObjects,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los objetos de obra por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const constructionObjects = await this.prConstructionObjectService.findAllByProject(
        projectID,
      );
      if (
        constructionObjects === 'No existen objetos de obra para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          constructionObjects,
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          constructionObjects,
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

  // Obtener un objeto de obra
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const constructionObject = await this.prConstructionObjectService.findOne(
        id,
      );
      if (!constructionObject) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El objeto de obra no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          constructionObject,
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

  // Actualizar objeto de obra
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrConstructionObjectDto: UpdatePrConstructionObjectDto,
  ) {
    try {
      const updatedConstructionObject = await this.prConstructionObjectService.update(
        id,
        updatePrConstructionObjectDto,
      );

      if (!updatedConstructionObject) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El objeto de obra no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Objeto de obra actualizado correctamente',
          updatedConstructionObject,
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

  // Eliminar objeto de obra
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteConstructionObject = await this.prConstructionObjectService.remove(
        id,
      );
      if (!responseDeleteConstructionObject) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El objeto de obra no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteConstructionObject,
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
